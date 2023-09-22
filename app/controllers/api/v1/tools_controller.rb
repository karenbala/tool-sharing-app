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

    def create
      tool = Tool.new(tool_params)
      tool.user = current_user

      if tool.save
        flash[:notice] = "New tool added successfully"
        render json: tool
     else
        render json: { errors: tool.errors.full_messages.to_sentence }
     end
    end

    private
    def tool_params
      params.require(:tool).permit(:power_type, :name, :image_url, :product, :brand, :size, :weight, :description, :available)
    end

end 