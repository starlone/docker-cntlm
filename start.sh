#!/bin/sh

service cntlm restart
cntlm -v
nginx -g "daemon off;"
