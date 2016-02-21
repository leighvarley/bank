$ ->

  bank =

    makeTransaction: ->

      balanceDiv = $(@).siblings "div.balance"
      startingBalance = parseFloat(balanceDiv.text().replace("$", ""))
      userInput = parseFloat($(@).siblings("input.userInput").val())
      self = $(@)

      if $(@).hasClass "deposit"
        total = startingBalance + (userInput || 0)
      else
        if startingBalance >= userInput
          total = startingBalance - (userInput || 0)
        else
          total = startingBalance

      updateThePage = ->
        balanceDiv.html "<h2>$" + total.toFixed(2) + "</h2>"
        if (self.hasClass("withdrawal")) && (userInput > startingBalance)
          balanceDiv.append "<p>Insufficient Funds!</p>"
        $("input.userInput").val("");

      updateThePage()

  $("[type=button]").on "click", bank.makeTransaction
