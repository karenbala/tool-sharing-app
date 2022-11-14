class Api::V1::ToolsController < ApiController
  
    def index
      render json: Tool.all
    end

    def search
      tools = Tool.where("name ILIKE ? OR description ILIKE ?", "%#{params[ 'search_string']}%", "%#{params[ 'search_string']}%")
      render json: tools
    end

end 