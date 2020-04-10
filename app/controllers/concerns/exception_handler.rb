module ExceptionHandler
  extend ActiveSupport::Concern

  included do
    rescue_from ActiveRecord::RecordNotFound do |e|
      render status: :not_found, json: { errors: 'not found' }
    end

    rescue_from ActiveRecord::RecordInvalid do |e|
      messages = e.record.errors.messages
      render status: :unprocessable_entity, json: { errors: messages }
    end
  end
end
