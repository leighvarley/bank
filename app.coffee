$ ->

  bank =

    makeTransaction: ->

      self = $(@)
      balanceDiv = self.siblings "div.balance"
      startingBalance = parseFloat balanceDiv.text().replace "$", ""
      userInputField = self.siblings "input.userInput"
      userInput = parseFloat userInputField.val()

      if self.hasClass "deposit" then total = startingBalance + (userInput or 0)
      else
        if startingBalance >= userInput then total = startingBalance - (userInput or 0) else total = startingBalance

      updateThePage = ->
        balanceDiv.html "<h2>$" + total.toFixed(2) + "</h2>"
        if (self.hasClass "withdrawal") and (userInput > startingBalance) then balanceDiv.append "<p>Insufficient Funds!</p>"
        userInputField.val ""

      updateThePage()

  $("[type=button]").on "click", bank.makeTransaction
