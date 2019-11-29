module Test.Generated.Main3340247286 exposing (main)

import Cats.DataTest

import Test.Reporter.Reporter exposing (Report(..))
import Console.Text exposing (UseColor(..))
import Test.Runner.Node
import Test

main : Test.Runner.Node.TestProgram
main =
    [     Test.describe "Cats.DataTest" [Cats.DataTest.suite] ]
        |> Test.concat
        |> Test.Runner.Node.run { runs = Nothing, report = (ConsoleReport UseColor), seed = 24528601366304, processes = 8, paths = ["/Users/dylanbroadbridge/Documents/dev/elm-firebase-starter/tests/Cats/DataTest.elm"]}