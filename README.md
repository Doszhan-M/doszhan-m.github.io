# My PortFolio
https://doszhan-m.github.io/


# Сжатие видео
```bash
sudo apt install ffmpeg -y
ffmpeg -i input.mp4 -vcodec libx265 -crf 28 -preset veryslow output.mp4
```
- **-i input.mp4**: Указывает входной файл.

- -**vcodec libx264**: Использует кодек H.264 для сжатия.

- **-crf 23**: Уровень качества. Диапазон от 0 (без потерь) до 51 (наихудшее качество). Рекомендуется 18–28 (23 — хорошее компромиссное значение).

- **-preset medium**: Скорость обработки. Варианты: ultrafast, superfast, fast, medium, slow, slower, veryslow. Чем медленнее, тем лучше качество при меньшем размере файла.

- **output.mp4**: Имя выходного файла.

