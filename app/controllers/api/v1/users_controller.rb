class Api::V1::UsersController < ApiController
  def show
    render json: current_user, serializer: UserSerializer, include: [
      'issued_requests', 
      'issued_requests.tool',  
      'tools',
      'received_requests',
      'received_requests.tool',
      # 'tools.user',
      'requests'
      # 'requests.owner',
      # 'received_requests',
      # 'received_requests.tool'

    ]
  end
end