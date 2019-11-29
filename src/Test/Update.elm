module Test.Update exposing (..)

import Test.Types exposing (..)
import Return exposing (Return, return)
import Types


init : Return Msg Model
init =
    return
        { sample = ""
        }
        Cmd.none


update : Types.Msg -> Model -> Return Msg Model
update msgFor model =
    case msgFor of
        Types.MsgForTest msg ->
            updateTest msg model

        _ ->
            return model Cmd.none


updateTest : Msg -> Model -> Return Msg Model
updateTest msg model =
    case msg of
        NoOp ->
            return model Cmd.none
