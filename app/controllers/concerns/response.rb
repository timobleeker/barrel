module Response
  def json_response(object, status = :ok, errors = [])
    render json: { data: object, errors: errors }, status: status
  end
end
