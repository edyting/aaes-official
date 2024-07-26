import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="projects">Projects Dashboard</Link></li>
          <li><Link to="gallery">Gallery Dashboard</Link></li>
          <li><Link to="events">Events Dashboard</Link></li>
          <li><Link to="executives">Executives Dashboard</Link></li>
          <li><Link to="addproject">Add Project</Link></li>
          <li><Link to="addexecutives">Add Executives</Link></li>
          <li><Link to="addevent">Add Event</Link></li>
          <li><Link to="addgallery">Add Gallery</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
