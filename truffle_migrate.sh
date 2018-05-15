#!/bin/bash
truffle migrate --network supplier_node --reset > /dev/null &
sleep 1
set -x
truffle migrate --network supplier_node --reset
