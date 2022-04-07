#!/usr/bin/env bash

FMT_TYPE=
ARGS=()
EXIT_CODE=1

while [ $# -gt 0 ]; do
    case "${1^^}" in
        "-T"|"--TYPE")
            FMT_TYPE="$2"

            shift
            shift
        ;;
        *)
            ARGS+=("$1")

            shift
        ;;
    esac
done

if [[ -z $FMT_TYPE || ${FMT_TYPE^^} = "PRETTIER" ]]; then
    echo -e "\n==== Running Prettier ===="
    npx --no-install prettier -u -w ${ARGS[@]} &&
    EXIT_CODE=0
fi

if [[ -z $FMT_TYPE || ${FMT_TYPE^^} = "STYLELINT" ]]; then
    echo -e "\n==== Running Stylelint ===="
    npx --no-install stylelint ${ARGS[@]} &&
    EXIT_CODE=0
fi

exit $EXIT_CODE