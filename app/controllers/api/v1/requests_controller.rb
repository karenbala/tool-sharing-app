class Api::V1::RequestsController < ApiController
  
  def index
    render json: Request.all
  end

  def create
    
    request = Request.new(request_params)

    if request.save
      render json: {}
    else  
      render json: { error: "bad request" }, status: 400
    end
  end

  private
  def request_params
    params.require(:request).permit(:tool_id, :owner_id, :borrower_id)
  end
  
end