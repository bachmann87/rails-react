require 'dice'
require 'player'

class Game
    def start
       
        # Flag to control the game state
        gameRunning = true

        # Init Dice
        dice = Dice.new

        # Amount of Game Rounds
        rounds = 1

        # Init Winner
        winner = ""

        # Init Players
        bob = Player.new('Bob', ["Rot", "Weiss", "Blau"])
        alice = Player.new('Alice', ["Rot", "Weiss", "Pink"])
        robert = Player.new('Robert', ["Rot", "Weiss", "Gelb"])

        # Assign Player to Array
        players = [
            bob,
            alice,
            robert
        ]
        
        while gameRunning do

            # Roll the dice
            color = dice.roll

            # Iterate each player
            players.each do |player|

                # Get Cards of Player
                cards = player.cards

                # Check if player has card in set
                if cards.include? color
                    
                    # Get Index of Array Element
                    index = cards.index(color)
    
                    # Remove Element
                    cards.delete_at(index)
    
                end

                # End Game if Player has an empty set of cards
                if cards.empty? 

                    # Set Winner
                    winner = player.name

                    # End Game
                    gameRunning = false

                end

            end

            rounds += 1
        end
        
        return [winner, rounds];
    end

end