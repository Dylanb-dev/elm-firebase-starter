module Main exposing (main)

import Browser
import Router.Types
import Types exposing (Model, Msg(..))
import Update exposing (init, update)
import View exposing (view)


main : Program () Model Msg
main =
    Browser.application
        { init = init
        , view = view
        , update = update
        , subscriptions = always Sub.none
        , onUrlChange = MsgForRouter << Router.Types.OnUrlChange
        , onUrlRequest = MsgForRouter << Router.Types.OnUrlRequest
        }
