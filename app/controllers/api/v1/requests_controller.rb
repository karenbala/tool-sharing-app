class Api::V1::RequestsController < ApiController
  def index
    render json: Request.all
  end
end