import { Box } from '@chakra-ui/react';
import React from 'react'
import { useCallback, useState } from "react";
import Tree from "react-d3-tree";

export const useCenteredTree = (defaultTranslate = { x: 0, y: 0 }) => {
  const [translate, setTranslate] = useState(defaultTranslate);
  const [dimensions, setDimensions] = useState();
  const containerRef = useCallback((containerElem) => {
    if (containerElem !== null) {
      const { width, height } = containerElem.getBoundingClientRect();
      setDimensions({ width, height });
      setTranslate({ x: width / 2, y: height / 2 });
    }
  }, []);
  return [dimensions, translate, containerRef];
};



const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
    <g>
      <rect width="20" height="20" x="-10" onClick={toggleNode} />
      {nodeDatum.image && (
      <image
        href={nodeDatum.image}
        x="-10"
        y="-10"
        width="50"
        height="0"
        onClick={toggleNode}
      />
    )}

      <text fill="black" strokeWidth="1" x="20">
        {nodeDatum.name}
      </text>
      {nodeDatum.attributes?.department && (
        <text fill="black" x="20" dy="20" strokeWidth="1">
          Department: {nodeDatum.attributes?.department}
        </text>
      )}
    </g>
  );


  const containerStyles = {
    width: "100vw",
    height: "100vh",
    color:"red",
    position: 'relative',
  }

const orgChartJson={
    "name": "CEO",
    "image": "https://bit.ly/dan-abramov", // Add image path for the CEO node

    "children": [
      {
        "name": "Manager",
        "attributes": {
          "department": "Production"
        },
        "children": [
          {
            "name": "Foreman",
            "attributes": {
              "department": "Fabrication"
            },
            "children": [
              {
                "name": "Workers"
              }
            ]
          },
          {
            "name": "Foreman",
            "attributes": {
              "department": "Assembly"
            },
            "children": [
              {
                "name": "Workers"
              }
            ]
          }
        ]
      },
      {
        "name": "Manager",
        "attributes": {
          "department": "Marketing"
        },
        "children": [
          {
            "name": "Sales Officer",
            "attributes": {
              "department": "A"
            },
            "children": [
              {
                "name": "Salespeople"
              }
            ]
          },
          {
            "name": "Sales Officer",
            "attributes": {
              "department": "B"
            },
            "children": [
              {
                "name": "Salespeople"
              }
            ]
          }
        ]
      }
    ]
  }
  



const Hierarchy = () => {
    const [dimensions, translate, containerRef] = useCenteredTree();
    return (
      <Box style={containerStyles} ref={containerRef} >
        <Tree
          data={orgChartJson}
          dimensions={dimensions}
          translate={translate}
          renderCustomNodeElement={renderRectSvgNode}
          orientation="vertical"
         // translate={{ x: 300, y: 50 }}
         // pathFunc="straight"
          //nodeSize={{ x: 150, y: 50 }}
          separation={{ siblings: 1.5, nonSiblings: 2 }}
        />
      </Box>
    );
}

export default Hierarchy