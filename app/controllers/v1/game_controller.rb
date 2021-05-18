class V1::GameController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
       
        # Init Game Class
        game = Game.new
       
        # Start Game
        result = game.start
 
        # Get Array Abstraction
        winner = result[0]
        rounds = result[1]
 
        # Return Result
        render json: { :game => [
            :winner => winner,
            :rounds => rounds
        ]
     }.to_json
    end
end