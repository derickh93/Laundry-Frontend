import React, { Component } from "react";
import Select from "react-select";

export default function Order(props) {
  const options = [
    {
      value: props.data.attributes.status,
      label: props.data.attributes.status,
    },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  function updateStatus(e) {
    console.log(e);
  }
  return (
    <tr>
      <th scope="row">{props.data.id}</th>

      <td> {props.data.attributes.customer_Name}</td>
      <td>{props.data.attributes.pickup_Address}</td>

      {/* 
        <p>{JSON.parse(props.data.attributes.pickup_Address).line1}</p>
        <p>{JSON.parse(props.data.attributes.pickup_Address).line2}</p>
        <p></p>
        <p>{JSON.parse(props.data.attributes.pickup_Address).city}</p>
        <p>{JSON.parse(props.data.attributes.pickup_Address).state}</p>
        {JSON.parse(props.data.attributes.pickup_Address).postal_code} */}
      <td>{props.data.attributes.dryClean_Count}</td>
      <td>{props.data.attributes.laundryBag_Count}</td>
      <td>{props.data.attributes.pickup_Date}</td>
      <td>{props.data.attributes.pickup_Time}</td>
      <td>{props.data.attributes.preferences}</td>
      <td>
        {" "}
        <Select
          options={options}
          value={props.data.attributes.status}
          name="status"
          onChange={(e) => {
            updateStatus(e);
          }}
        />
      </td>
      <td>{props.data.attributes.createdAt}</td>
    </tr>
  );
}
