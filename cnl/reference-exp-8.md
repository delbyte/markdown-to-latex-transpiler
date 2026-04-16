# Reference Document - Experiment 08

## Title
DNS lookup program: domain to IP and IP to domain.

## Concept
DNS maps hostnames to IP addresses and supports reverse lookup from IP to hostname.

## Functions Used
- `gethostbyname()` for forward lookup.
- `gethostbyaddr()` for reverse lookup.
- `inet_pton()` for IPv4 parsing.

## Platform Notes
- Works on Linux/macOS (POSIX).
- On Windows, use Winsock (`winsock2.h`) and `WSAStartup()`.
- Reverse lookup depends on DNS PTR records and may not always return friendly domain.

## Program Source (C++)
```cpp
#include <iostream>
#include <arpa/inet.h>
#include <netdb.h>
#include <cstring>
using namespace std;

void forwardLookup(const string &host) {
    hostent *he = gethostbyname(host.c_str());
    if (he == nullptr) {
        herror("gethostbyname");
        return;
    }

    in_addr **addr_list = (in_addr **)he->h_addr_list;
    cout << "IP address(es) of " << host << ":\n";
    for (int i = 0; addr_list[i] != nullptr; i++) {
        cout << inet_ntoa(*addr_list[i]) << "\n";
    }
}

void reverseLookup(const string &ip) {
    sockaddr_in sa{};
    sa.sin_family = AF_INET;

    if (inet_pton(AF_INET, ip.c_str(), &sa.sin_addr) <= 0) {
        cout << "Invalid IP address format\n";
        return;
    }

    hostent *he = gethostbyaddr(&sa.sin_addr, sizeof(sa.sin_addr), AF_INET);
    if (he == nullptr) {
        herror("gethostbyaddr");
        return;
    }

    cout << "Domain name of " << ip << ": " << he->h_name << "\n";
}

int main() {
    int choice;
    string input;

    cout << "DNS Lookup Program\n";
    cout << "1. Forward Lookup (Domain -> IP)\n";
    cout << "2. Reverse Lookup (IP -> Domain)\n";
    cout << "Enter your choice: ";
    cin >> choice;

    if (choice == 1) {
        cout << "Enter domain name: ";
        cin >> input;
        forwardLookup(input);
    } else if (choice == 2) {
        cout << "Enter IP address: ";
        cin >> input;
        reverseLookup(input);
    } else {
        cout << "Invalid choice!\n";
    }

    return 0;
}
```

## Compilation and Execution
```bash
g++ dns_lookup.cpp -o dns_lookup
./dns_lookup
```

## Sample Output
```text
DNS Lookup Program
1. Forward Lookup (Domain -> IP)
2. Reverse Lookup (IP -> Domain)
Enter your choice: 1
Enter domain name: www.google.com
IP address(es) of www.google.com:
142.250.192.196

DNS Lookup Program
1. Forward Lookup (Domain -> IP)
2. Reverse Lookup (IP -> Domain)
Enter your choice: 2
Enter IP address: 142.250.192.196
Domain name of 142.250.192.196: del03s06-in-f4.1e100.net
```
