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
    owner = tool.owner
    request = Request.new()

    if request.save
      # ...
    end
  end
end