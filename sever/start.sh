#! /bin/bash

export LD_LIBRARY_PATH=/opt/glibc-2.14/lib:$LD_LIBRARY_PATH
nohup node index.js &