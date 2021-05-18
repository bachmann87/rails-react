class Dice 

    def roll
        index = rand(5)
        colors = ["Rot", "Grün", "Gelb", "Pink", "Weiss", "Blau"]
        return colors[index]
    end

end