#!/usr/bin/env bash
cmd.exe //k teamcity-server.bat start
cmd.exe //k cd ../buildAgent/bin
cmd.exe //k agent.bat start
