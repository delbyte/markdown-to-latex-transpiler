# Reference Document - Experiment 07

## Title
Socket programming using TCP and UDP for hello exchange, calculator, and file transfer.

## Theory Quick Notes
- TCP is connection-oriented and reliable.
- UDP is connectionless and faster with lower overhead.
- Common Berkeley primitives: `socket`, `bind`, `listen`, `accept`, `connect`, `send`, `recv`, `close`.

## A) TCP Program Structure

### Files
1. `server.cpp`
2. `client.cpp`

### Compilation
```bash
g++ server.cpp -o server
g++ client.cpp -o client
```

### Run
```bash
./server
./client
```

### Typical Flow
1. Client sends `HELLO` -> Server replies with greeting.
2. Client sends `CALC 10+5` -> Server returns result.
3. Client sends `FILE` then file bytes -> Server saves file and acknowledges.
4. Client sends `EXIT` to close session.

### Sample Output
```text
Server waiting for connection...
Client connected!

Client Menu:
1. Say Hello
2. Send File
3. Calculator
4. Exit

Enter choice: 1
Server: Hello from Server!

Enter choice: 3
Enter expression (e.g., 10+5): 10+5
Result: 15

Enter choice: 2
File received successfully
```

## B) UDP File Transfer Program Structure

### Files
1. `udp_server.cpp`
2. `udp_client.cpp`

### Compilation
```bash
g++ udp_server.cpp -o udp_server
g++ udp_client.cpp -o udp_client
```

### Run
```bash
./udp_server
./udp_client
```

### Typical Flow
1. Client sends filename.
2. Client sends file chunks.
3. Client sends `EOF` marker.
4. Server writes `received_<filename>` for each of 4 files.

### Sample Output
```text
UDP Server is running and waiting...
Receiving file: received_script.cpp
File received successfully: received_script.cpp
Receiving file: received_text.txt
File received successfully: received_text.txt
Receiving file: received_audio.mp3
File received successfully: received_audio.mp3
Receiving file: received_video.mp4
File received successfully: received_video.mp4
All 4 files received successfully.
```

## Suggested Files for Demo
- Script: `script.cpp`
- Text: `text.txt`
- Audio: `audio.mp3`
- Video: `video.mp4`

## Note
If needed for viva/demo, keep both server and client terminal screenshots and include them in the report.
