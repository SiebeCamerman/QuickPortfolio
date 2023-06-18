---
title: PeopleCounter
path: peoplecounter
image: /projects/peoplecounter/peoplecounter.png
date: 22-12-2023
summary: Real-time person detection solution for monitoring classroom occupancy and addressing congestion in the DI department.
featured: true
---
# PeopleCounter

The PeopleCounter project is a comprehensive solution designed to address the challenge of monitoring and managing classroom occupancy in the DI (Digital Innovation) department. The project revolves around utilizing advanced technologies to provide accurate and real-time data on the number of people present in the classroom. This data serves as valuable evidence to support decision-making processes and address issues related to classroom congestion.

## Project Overview

In response to the observed high levels of classroom congestion, a DI coach requested a solution that could accurately track the number of individuals present in the classroom and provide data-backed evidence for requesting additional classrooms during peak periods. To fulfill this requirement, we developed the PeopleCounter project, which incorporates the following key components:

- Raspberry Pi with camera: The Raspberry Pi is equipped with a camera and runs YOLOv5, a state-of-the-art computer vision model capable of person detection.

- FastAPI: We developed a custom API using FastAPI, a high-performance web framework for building APIs with Python. The FastAPI handles the communication between the Raspberry Pi and the server.

- Proxmox VM server: The Proxmox VM server hosts the FastAPI server, which receives the person count data from the Raspberry Pi and writes it into a dedicated database.

- Discord bot integration: To ensure easy access to the occupancy data, we implemented a Discord bot that interacts with the API. This allows DI students and staff to view the real-time person count directly on our Discord server.

- UBEAC integration: The PeopleCounter project also integrates with UBEAC, a powerful platform that provides a visually appealing interface and generates insightful graphs showcasing the occupancy trends over time. This integration enhances the ability to present data-backed evidence for decision-making and resource allocation.

## Achieving Data-Backed Insights

The PeopleCounter project not only fulfills the specific feature requested by the DI coach but offers a comprehensive solution to monitor classroom occupancy. By leveraging computer vision, API development, and data visualization techniques, we provide accurate and real-time data on the number of individuals present in the classroom. This data enables the DI department to identify peak periods of congestion, evaluate classroom capacity, and request additional resources based on concrete evidence.

## Conclusion

The PeopleCounter project has been a valuable learning experience for our team. We had the opportunity to work with cutting-edge technologies such as YOLOv5 for person detection, FastAPI for API development, and integration with platforms like Discord and UBEAC. Through this project, we gained practical knowledge and skills in computer vision, API development, and data visualization. By providing accurate and real-time data on classroom occupancy, PeopleCounter enables the DI department to make informed decisions and address issues related to classroom congestion. We are proud of the practical solution we have developed and look forward to applying our newfound expertise to future projects in the field of digital innovation.
