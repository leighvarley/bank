$ ->

  bank =

    makeTransaction: ->

      balanceDiv = $(@).siblings "div.balance"
      startingBalance = parseFloat(balanceDiv.text().replace "$", "")
      userInputField = $(@).siblings "input.userInput"
      userInput = parseFloat(userInputField.val())
      self = $(@)

      if $(@).hasClass "deposit"
        total = startingBalance + (userInput or 0)
      else
        if startingBalance >= userInput
          total = startingBalance - (userInput or 0)
        else
          total = startingBalance

      updateThePage = ->
        balanceDiv.html "<h2>$" + total.toFixed(2) + "</h2>"
        if (self.hasClass "withdrawal") and (userInput > startingBalance)
          balanceDiv.append "<p>Insufficient Funds!</p>"
        userInputField.val ""

      updateThePage()

  $("[type=button]").on "click", bank.makeTransaction
