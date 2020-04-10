class ApplicationController < ActionController::Base
  def index
    render html: '', layout: 'application'
  end
end
