class Api::V1::UsersController < ApiController
  def show
    render json: current_user, serializer: UserSerializer, include: [
      'issued_requests', 
      'issued_requests.tool', 
      'tools'
    ]
  end
end