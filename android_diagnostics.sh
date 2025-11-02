#!/bin/bash

echo "=== Проверка подключения ADB ==="
adb devices

echo -e "\n=== Общая информация об устройстве ==="
adb shell getprop ro.product.model
adb shell getprop ro.build.version.release
adb shell getprop ro.miui.ui.version.name
adb shell getprop ro.serialno

echo -e "\n=== Состояние батареи ==="
adb shell dumpsys battery | grep -E "level|status|temperature|voltage"

echo -e "\n=== Проверка памяти ==="
adb shell df -h

echo -e "\n=== Температуры сенсоров ==="
adb shell cat /sys/class/thermal/thermal_zone*/temp 2>/dev/null

echo -e "\n=== Список пользовательских приложений ==="
adb shell pm list packages -3 | head -n 20

echo -e "\n=== Последние 20 записей логов системы ==="
adb logcat -d | tail -n 20
