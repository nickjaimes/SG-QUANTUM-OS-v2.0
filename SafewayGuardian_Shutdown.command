#!/bin/bash
# SAFEWAY GUARDIAN AUTO SHUTDOWN (Monday–Friday, 19:00 JST)
export TZ="Asia/Tokyo"

while true; do
  NOW=$(date +%H:%M)
  DAY=$(date +%u)
  if [[ $DAY -le 5 && "$NOW" > "19:00" ]]; then
    # 🔔 Chime + Voice sign-off
    afplay /System/Library/Sounds/Glass.aiff
    say "Captain Nicolas Santiago, the nineteen hundred cycle is complete. TRINITY AI and EAGLE EYE are now entering rest mode."

    # 🧠 Close mission windows
    osascript -e 'tell application "Google Chrome" to quit'
    osascript -e 'tell application "Preview" to quit'

    # 💾 Log entry
    echo "$(date) — SAFEWAY GUARDIAN shutdown executed." >> "$HOME/Desktop/SG_Daily_Log.txt"
    break
  fi
  sleep 60
done
