module RequestSpecHelper
  def data
    json['data']
  end

  def errors
    json['errors']
  end

  def json
    JSON.parse(response.body)
  end
end
