class Api::V1::ToolsController < ApiController
  
    def index
      render json: Tool.all
    end

    def show
      render json: Tool.find(params[:id])
    end

    def search
      tools = Tool.where("name ILIKE ? OR product ILIKE ?", "%#{params[ 'search_string']}%", "%#{params[ 'search_string']}%")
      render json: tools
    end

end 