# Reference Document - Experiment 06

## Title
Configuration of a 3-router network using RIP / OSPF / BGP in Cisco Packet Tracer.

## A) RIP Routing Configuration Using 3 Routers

### 1) Device Requirement
| S.No | Device | Model Name | Quantity |
| :--- | :--- | :--- | :--- |
| 1 | PC | PC | 6 |
| 2 | Switch | PT-Switch | 3 |
| 3 | Router | PT-Router | 3 |

### 2) PC Addressing Table
| S.No | Device | IPv4 Address | Subnet Mask | Default Gateway |
| :--- | :--- | :--- | :--- | :--- |
| 1 | PC0 | 192.168.10.2 | 255.255.255.0 | 192.168.10.1 |
| 2 | PC1 | 192.168.10.3 | 255.255.255.0 | 192.168.10.1 |
| 3 | PC2 | 192.168.20.2 | 255.255.255.0 | 192.168.20.1 |
| 4 | PC3 | 192.168.20.3 | 255.255.255.0 | 192.168.20.1 |
| 5 | PC4 | 192.168.30.2 | 255.255.255.0 | 192.168.30.1 |
| 6 | PC5 | 192.168.30.3 | 255.255.255.0 | 192.168.30.1 |

### 3) Router Interface Addressing Table
| Router | Interface | IPv4 Address | Subnet Mask |
| :--- | :--- | :--- | :--- |
| Router0 | FastEthernet0/0 | 192.168.10.1 | 255.255.255.0 |
| Router0 | Serial2/0 | 10.0.0.1 | 255.0.0.0 |
| Router1 | FastEthernet0/0 | 192.168.20.1 | 255.255.255.0 |
| Router1 | Serial2/0 | 10.0.0.2 | 255.0.0.0 |
| Router1 | Serial3/0 | 11.0.0.1 | 255.0.0.0 |
| Router2 | FastEthernet0/0 | 192.168.30.1 | 255.255.255.0 |
| Router2 | Serial2/0 | 11.0.0.2 | 255.0.0.0 |

### 4) Steps
1. Build topology in Packet Tracer using automatic cable selection.
2. Configure all PC IP addresses from Desktop -> IP Configuration.
3. Configure router interfaces and enable interfaces (`no shutdown`).
4. Configure RIP on all routers.
5. Verify routing and end-to-end ping.

### 5) RIP CLI Commands
```text
Router0(config)# router rip
Router0(config-router)# network 192.168.10.0
Router0(config-router)# network 10.0.0.0

Router1(config)# router rip
Router1(config-router)# network 192.168.20.0
Router1(config-router)# network 10.0.0.0
Router1(config-router)# network 11.0.0.0

Router2(config)# router rip
Router2(config-router)# network 192.168.30.0
Router2(config-router)# network 11.0.0.0
```

### 6) Verification
```text
PC0> ping 192.168.20.2
PC0> ping 192.168.30.2
Router0# show ip route
Router0# show ip protocols
```

## B) OSPF Configuration Notes

### Router Roles
1. Backbone Router: Router in Area 0.
2. Internal Router: All interfaces in one area.
3. ABR: Connects backbone area to other area.
4. ASBR: Connects OSPF network to different routing domain.

### Sample OSPF Commands
```text
R1(config)# router ospf 1
R1(config-router)# network 192.168.10.48 0.0.0.7 area 1
R1(config-router)# network 10.255.255.80 0.0.0.3 area 1
R1(config-router)# network 10.255.255.8 0.0.0.3 area 1

R2(config)# router ospf 1
R2(config-router)# network 192.168.10.64 0.0.0.7 area 1
R2(config-router)# network 10.255.255.80 0.0.0.3 area 1

R3(config)# router ospf 1
R3(config-router)# network 192.168.10.16 0.0.0.7 area 1
R3(config-router)# network 10.255.255.8 0.0.0.3 area 1
```

## C) BGP Configuration Notes

### Sample BGP Commands
```text
R1(config)# router bgp 1
R1(config-router)# neighbor 172.16.0.2 remote-as 71
R1(config-router)# network 10.0.0.0 mask 255.0.0.0

R2(config)# router bgp 71
R2(config-router)# neighbor 172.16.0.1 remote-as 1
R2(config-router)# neighbor 172.14.0.2 remote-as 79
R2(config-router)# network 40.0.0.0 mask 255.0.0.0

R3(config)# router bgp 79
R3(config-router)# neighbor 172.14.0.1 remote-as 71
R3(config-router)# network 40.0.0.0 mask 255.0.0.0
```

### Verification
```text
R1# show ip route
R1# show ip protocols
R1# show ip bgp summary
```

## Note
Add your Packet Tracer screenshots (topology, CLI commands, and ping verification) in the images folder and reference them in the experiment file when available.
