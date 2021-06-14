class ApplicationController < ActionController::API

    # def logged_in?
    #     headers= request.headers["Authorization"]
    #     token = headers.split(" ")[1]
    #     eater_id = JWT.decode(token, "Test")
    #     eater = Eater.find(eater_id)
    #     if eater
    #         eater
    #     else
    #         eater = nil
    #     end
    #     render json:{error: "Please log in"} unless eater
    # end

end
