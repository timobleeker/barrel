module Api
  class SearchParamHandler
    attr_reader :results

    def initialize(scope, params)
      @search_params = params
      @scope = scope
    end

    def process
      @results = search_results
    end

    private
    attr_reader :scope, :search_params

    def search_results
      search_params.each do |field, value|
        if Integer(value, exception: false)
          @scope = scope.where(arel_table[field].gteq(value.to_i))
        else
          @scope = scope.where(arel_table[field].matches("%#{value.to_s}%"))
        end
      end

      scope
    end

    def arel_table
      @arel_table ||= scope.arel_table
    end
  end
end
