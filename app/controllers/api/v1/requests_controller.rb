class Api::V1::RequestsController < ApiController
  #  Rails as an API backend article
  # covers methods like autorize_user and authenticate_user
  # `authenticate_user!` with a bang, !, comes directly from Devise and can only be used in REGULAR controllers, not API controllers
  
  def index
    render json: Request.all
  end

  def create
    user = current_user
    tool = Tool.find(params[:tool_id])

     
    # owner_id = tool.owner

    # nick says finish making this request
    # binding.pry
    request = Request.new(request_params)

    if request.save
      render json: {}
    else  
      render json: { error: "bad request" }, status: 400
    end

    private
    def request_params
      params.require(:request).permit(:tool_id, :owner_id, :borrower_id)
    end
  end
end