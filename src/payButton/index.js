import React from 'react'
import ReactDOM from 'react-dom'
import PayButton from './PayButton'

function createButton (button, id) {
  ReactDOM.render(
    <PayButton
      buttonText={button.getAttribute('buttonText')}
      dialogTitle={button.getAttribute('dialogTitle')}
      amount={button.getAttribute('amount')}
      currency={button.getAttribute('currency')}
      merchantID={button.getAttribute('merchantID')}
      paymentID={button.getAttribute('paymentID')}
      callbackURL={button.getAttribute('callbackURL')}
    />,
    document.getElementById(id)
  )
}

window.onload = function() {
  var buttons = document.getElementsByClassName("payButton")
  console.log('Gateway: Found', buttons.length, 'payment buttons(s) on this page')
  for(var i = 0; i < buttons.length; i++) {
    var buttonID = 'pay-' + Math.floor(Math.random() * 100000)
    buttons.item(i).id = buttonID
    buttons.item(i).setAttribute('id', buttonID)
    var button = buttons.item(i)
    createButton(button, buttonID)
  }
}
