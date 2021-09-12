import React, { useState, useEffect } from "react";
import { Input, AutoComplete } from "antd";
import { ContextConsumer } from "../context";
import history from "../utils/createHistory";

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

const searchResult = (query) =>
  new Array(getRandomInt(5))
    .join(".")
    .split(".")
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              Found {query} on{" "}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });
const dataSource = ["Burns Bay Road", "Downing Street", "Wall Street"];

const SearchInput = () => {
  const { youtubeData, getdata } = ContextConsumer();
  const [options, setOptions] = useState([]);
  const [mainOptions, setMainOptions] = useState([]);
  const dataSource = [];

  useEffect(() => {
    if (youtubeData && youtubeData.length) {
      let tempOptions = [];
      youtubeData.forEach((element, idx) => {
        let label = element.author_name;
        tempOptions.push(String(label));
        label = element.title;
        tempOptions.push(String(label));
      });
      setOptions([...tempOptions]);
      setMainOptions([[...tempOptions]]);
    } else {
      getdata();
    }
  }, [youtubeData]);

  const handleSearch = (value) => {
    console.log(value);
    let tempOptions = [];
    if (value == "") {
      tempOptions = mainOptions;
    } else {
      mainOptions.forEach((ele) => {
        if (
          String(ele.label).toLowerCase().search(String(value).toLowerCase()) >=
          0
        ) {
          tempOptions.push(ele);
        }
      });
    }
    console.log(tempOptions);
    setTimeout(() => {
      setOptions([...tempOptions]);
    }, 100);
  };

  const onSelect = (value) => {
    let idx = null;
    if (youtubeData && youtubeData.length) {
      youtubeData.forEach((ele, i) => {
        if (
          String(ele.title).toLowerCase().search(String(value).toLowerCase()) >=
            0 ||
          String(ele.author_name)
            .toLowerCase()
            .search(String(value).toLowerCase()) >= 0
        ) {
          idx = i;
        }
      });
    }
    if (idx) {
      history.push(`/playVideo/${idx}`);
    }
  };

  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{
        width: 700,
      }}
      dataSource={options}
      filterOption={(inputValue, option) =>
        option.props.children
          .toUpperCase()
          .indexOf(inputValue.toUpperCase()) !== -1
      }
      onSelect={onSelect}
      onPressEnter={onSelect}
    >
      <Input.Search size="large" placeholder="Search" enterButton />
    </AutoComplete>
  );
};

export default SearchInput;
