module Api
  class ApiController < ActionController::API
    include Response
    include ExceptionHandler
  end
end
