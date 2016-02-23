$ ->

  bank =

    makeTransaction: ->

      balanceDiv = $(@).siblings "div.balance"
      startingBalance = parseFloat balanceDiv.text().replace "$", ""
      userInputField = $(@).siblings "input.userInput"
      userInput = parseFloat userInputField.val()

      if userInput > 0
        if $(@).hasClass "deposit" then total = startingBalance + (userInput or 0)
        else
          if startingBalance >= userInput then total = startingBalance - (userInput or 0) else total = startingBalance
      else total = startingBalance

      updateThePage = do =>
        balanceDiv.html "<h2>$" + total.toFixed(2) + "</h2>"
        if ($(@).hasClass "withdrawal") and (userInput > startingBalance) then balanceDiv.append "<p>Insufficient Funds!</p>"
        userInputField.val ""

  $("[type=button]").on "click", bank.makeTransaction
