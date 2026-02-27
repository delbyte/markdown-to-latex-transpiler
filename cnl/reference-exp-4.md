[[editor note: this originally had images of the software and its terminal (?) output]]

Step 1: First, open the cisco packet tracer desktop and select the devices given below:
S.NO Device Model-Name
1. PC PC
2. Switch PT-Switch
IP Addressing Table
S.NO Device  IPv4 Address Subnet Mask
  pc0 192.168.0.1 255.255.255.0
  pc1 192.168.0.2 255.255.255.0
  pc2 192.168.0.3 255.255.255.0
  pc3 192.168.0.4 255.255.255.0
 Then, create a network topology as shown below image:
 Use an Automatic connecting cable to connect the devices with others.

 
Step 2: Configure the PCs (hosts) with IPv4 address and Subnet Mask according to the IP
addressing table given above.
 To assign an IP address in PC0, click on PC0.
 Then, go to desktop and then IP configuration and there you will IPv4 configuration.
 Fill IPv4 address and subnet mask.

 
  Assigning an IP address using the ipconfig command, or we can also assign an IP address
with the help of a command.
 Go to the command terminal of the PC.
 Then, type ipconfig &lt;IPv4 address&gt;&lt;subnet mask&gt;&lt;default gateway&gt;(if needed)
Example: ipconfig 192.168.0.1 255.255.255.0

 
 Repeat the same procedure with other PCs to configure them thoroughly.
Step 3: Verify the connection by pinging the IP address of any host in PC0.
 Use the ping command to verify the connection.
 As we can see we are getting replies from a targeted node on both PCs.
 Hence the connection is verified.

 
Simulation Result:
A simulation of the experiment is given below we have sent two PDU packets one targeted from
PC0 to PC2 and another targeted from PC3 to PC1.

 Implementing Star Topology using Cisco Packet Tracer
A star topology for a Local Area Network (LAN) is one in which each node is connected to a
central connection point, such as a hub or switch. Whenever a node tries to connect with another
node then the transmission of the message must be happening with the help of the central node.
The best part of star topology is the addition and removal of the node in the network but too many
nodes can cause suffering to the network.
In this article, we will discuss How to Implement Star Topology using Cisco Packet Tracer.
A Cisco packet tracer is a simulation tool that is used for understanding the networks. The best part
of the Cisco packet tracer is its visualization you can see the actual flow of the message and
understand the workflow of the network devices. Implementation of Star Topology using Cisco
Packet Tracer is done using Switch.

2) Steps Implementing Star Topology using Cisco Packet Tracer:

Step 1: We have taken a switch and linked it to six end devices.

 
Step 2: Link every device with the switch.

 
Step 3: Provide the IP address to each device.

 
Step 4: Transfer message from one device to another and check the Table for Validation.

 
Now to check whether the connections are correct or not try to ping any device and the image
below is doing the same.
To do ping one terminal of one device and run the following command:
Command:
&quot;pingip_address_of _any_device&quot;
Example:
ping 192.168.1.4

Note: If the connections are correct
then you will receive the response.

3) Implementing RING Topology using Cisco Packet Tracer

Ring topology is a kind of arrangement of the network in which every device is linked with two
other devices. This makes a circular ring of interconnected devices which gives it its name. Data is
usually transmitted in one direction along the ring, known as a unidirectional ring. The data is
delivered from one device to the next until it reaches the decided destination. In a bidirectional
ring, data can travel in either direction.
To learn about Ring Topology refer to the Advantages and Disadvantages of ring topology article.
Steps to Configure and Setup Ring Topology in Cisco Packet Tracer :
Step 1: First, open the cisco packet tracer desktop and select the devices given below:
S.NO Device Model Name
1. PC PC
2. Switch PT-Switch
IP Addressing Table

S.NO Device IPv4 Address Subnet Mask
1. pc0 192.168.0.1 255.255.255.0
2. pc1 192.168.0.2 255.255.255.0
3. pc2 192.168.0.3 255.255.255.0
4. pc3 192.168.0.4 255.255.255.0
 Then, create a network topology as shown below the image.
 Use an Automatic connecting cable to connect the devices with others.

 
Step 2: Configure the PCs (hosts) with IPv4 address and Subnet Mask according to the IP
addressing table given above.
 To assign an IP address in PC0, click on PC0.
 Then, go to desktop and then IP configuration and there you will IPv4 configuration.
 Fill IPv4 address and subnet mask.

 
  Assigning IP address using the ipconfig command, or we can also assign an IP address
with the help of a command.
 Go to the command terminal of the PC.
 Then, type ipconfig &lt;IPv4 address&gt;&lt;subnet mask&gt;&lt;default gateway&gt;(if needed)
Example: ipconfig 192.168.0.1 255.255.255.0

 
 Repeat the same procedure with other PCs to configure them thoroughly.
Step 3: Verify the connection by pinging the IP address of any host in PC0.
 Use the ping command to verify the connection.
 As we can see we are getting replies from a targeted node on both PCs.
 Hence the connection is verified.

 
 A simulation of the experiment is given below we have sent two PDU packets one targeted
from PC0 to PC2 and another targeted from PC1 to PC3.

 
CONCLUSION: We have learned how to implement different topologies using different
transmission media in packet tracer tool.