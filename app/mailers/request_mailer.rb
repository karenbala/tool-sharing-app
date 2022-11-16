class RequestMailer < ApplicationMailer
  def new_request(request)
    @request = request

    mail(
      to: request.tool.user
      subject: "New tool request for #{request.tool.name}"
    )
  end
end