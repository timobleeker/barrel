module Api
  class WhiskeysController < ApiController
    before_action :set_whiskey, only: [:show, :update, :destroy]

    def index
      whiskeys = Whiskey.order(:created_at)
      json_response(whiskeys)
    end

    def search
      handler = SearchParamHandler.new(Whiskey, search_params)
      whiskeys = handler.process
      json_response(whiskeys)
    end

    def show
      json_response(@whiskey)
    end

    def create
      whiskey = Whiskey.create!(create_params)
      json_response(whiskey, :created)
    end

    def update
      @whiskey.update!(update_params)
      json_response(@whiskey)
    end

    def destroy
      @whiskey.destroy
      head :no_content
    end

    private
    def update_params
      create_params
    end

    def create_params
      params.require(:data).permit(
        :name,
        :description,
        :taste,
        :color,
        :smokiness
      )
    end

    def search_params
      params.except(:format, :whiskey).permit(
        :name,
        :description,
        :taste,
        :color,
        :smokiness
      )
    end

    def set_whiskey
      @whiskey = Whiskey.find(params[:id])
    end
  end
end
