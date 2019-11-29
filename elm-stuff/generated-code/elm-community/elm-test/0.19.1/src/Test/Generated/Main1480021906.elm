module Test.Generated.Main1480021906 exposing (main)

import Cats.DataTest

import Test.Reporter.Reporter exposing (Report(..))
import Console.Text exposing (UseColor(..))
import Test.Runner.Node
import Test

main : Test.Runner.Node.TestProgram
main =
    [     Test.describe "Cats.DataTest" [Cats.DataTest.suite] ]
        |> Test.concat
        |> Test.Runner.Node.run { runs = Nothing, report = JsonReport, seed = 233573078627585, processes = 8, paths = ["/Users/dylanbroadbridge/Documents/dev/elm-firebase-starter/tests/Cats/DataTest.elm"]}