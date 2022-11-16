class UserMailer < ApplicationMailer
  default from: 'notifications@example.com'

  def borrow_email
    @user = params[:user]
    # need to insert correct url when we receive hosting information
    @url = 'http://example.com/login'
    mail(to:@user.email, subject: "May I borrow your Mighty tool?")
  end
end