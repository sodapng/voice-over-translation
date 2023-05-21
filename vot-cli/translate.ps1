# Скрипт для PowerShell который скачивает видео, перевод и смешивает
#
# Использование:
# .\translate.ps1 <ссылка на видео> [отношение громкости оригинала - например: 0.4]
# 
# Usage:
# .\translate.ps1 <video link> [volume ratio - for example: 0.4]
#
# Буду рад узнать ваши идеи и о найденных ошибках!
# any ideas/issues are welcome!!
# Original Script: https://gitlab.com/musickiller/fishy-voice-over/-/blob/main/translate.fish



# Settings
$original_sound_ratio = 0.1
$temp_dir = "./temp" # will be removed
$temp_video_dir = "$temp_dir/video"
$temp_video = "$temp_video_dir/%(title)s.%(ext)s"
$temp_audio = "$temp_dir/audio"

$video_link = $args[0]
# If has second argument, set the original sound ratio to that one
if ($args[1]) {
    $original_sound_ratio = $args[1]
}
Write-Host "Original volume is set to $original_sound_ratio"

# Check that var is init
if ($video_link) {
    # No -Force, to make sure nothing is overwritten
    New-Item -ItemType Directory -Path $temp_dir -ErrorAction SilentlyContinue | Out-Null
    New-Item -ItemType Directory -Path $temp_video_dir -ErrorAction SilentlyContinue | Out-Null
    New-Item -ItemType Directory -Path $temp_audio -ErrorAction SilentlyContinue | Out-Null

    yt-dlp -o $temp_video $video_link
    $video_full_name = Get-ChildItem $temp_video_dir
    # Не забывайте сделать $env:Path += ";C:\Program Files\nodejs\" что бы в PowerShell работал npx!
    npx vot-cli $video_link --output $temp_audio

    $temp_video_file = (Get-ChildItem -Path $temp_video_dir)[0].FullName
    $temp_audio_file = (Get-ChildItem -Path $temp_audio)[0].FullName

    ffmpeg `
        -i $temp_video_file -i $temp_audio_file `
        -c:v copy `
        -filter_complex " `
            [0:a] volume=$original_sound_ratio [original]; `
            [original][1:a] amix=inputs=2:duration=longest [audio_out] `
        " `
        -map 0:v -map "[audio_out]" `
        -y $video_full_name

    Remove-Item -Recurse -Force $temp_dir
}
