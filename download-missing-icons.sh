#!/bin/bash
# Download missing Lucide icons (v1.3.0) to assets/icons/lucide.
# References:
# - Lucide GitHub: https://github.com/lucide-icons/lucide (v1.3.0, SVGs).

#!/bin/bash
# Download missing Lucide icons (v0.424.0) to assets/icons/lucide.
# References:
# - Lucide GitHub: https://github.com/lucide-icons/lucide (v0.424.0, SVGs)

mkdir -p src/assets/icons/lucide

wget https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/home.svg -O src/assets/icons/lucide/home.svg
wget https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/user.svg -O src/assets/icons/lucide/user.svg
wget https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/mail.svg -O src/assets/icons/lucide/mail.svg
wget https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/inbox.svg -O src/assets/icons/lucide/inbox.svg
wget https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/send.svg -O src/assets/icons/lucide/send.svg
wget https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/users.svg -O src/assets/icons/lucide/users.svg
wget https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/user-plus.svg -O src/assets/icons/lucide/user-plus.svg
wget https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/star.svg -O src/assets/icons/lucide/star.svg
wget https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/activity.svg -O src/assets/icons/lucide/activity.svg
wget https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/clock.svg -O src/assets/icons/lucide/clock.svg
wget https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/file-check.svg -O src/assets/icons/lucide/file-check.svg
wget https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/loader.svg -O src/assets/icons/lucide/loader.svg
wget https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/check.svg -O src/assets/icons/lucide/check.svg
wget https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/calendar.svg -O src/assets/icons/lucide/calendar.svg
wget https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/bar-chart.svg -O src/assets/icons/lucide/bar-chart.svg
wget https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/calendar-days.svg -O src/assets/icons/lucide/calendar-days.svg
wget https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/settings.svg -O src/assets/icons/lucide/settings.svg
wget https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/log-out.svg -O src/assets/icons/lucide/log-out.svg
wget https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/chevrons-left.svg -O src/assets/icons/lucide/chevrons-left.svg
wget https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/chevron-right.svg -O src/assets/icons/lucide/chevron-right.svg
wget https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/plus.svg -O src/assets/icons/lucide/plus.svg
wget https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/minus.svg -O src/assets/icons/lucide/minus.svg

echo "Lucide icons downloaded."