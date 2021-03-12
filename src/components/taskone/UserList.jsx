import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import useDebounce from './useDebounce';

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border: 1px solid #000;
  padding: 20px;

  span {
    display: block;
    margin-bottom: 5px;
  }
`;

const UserInfo = styled.div`
  border-right: 1px solid #000;
  text-align: left;
  width: 260px;
`;

const Users = styled.div`
  max-height: 300px;
  overflow: scroll;
  margin-top: 15px;
`;

const UserList = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  const debouncedFilter = useDebounce(value);

  const fetchData = async () => {
    const URL = 'https://jsonplaceholder.typicode.com/users';
    const query = debouncedFilter
      ? `?username=${encodeURIComponent(debouncedFilter)}`
      : '';

    const res = await fetch(`${URL}${query}`).then((response) => response.json());

    setData(res);
  };

  useEffect(() => {
    fetchData();
  }, [debouncedFilter]);

  const onFilterChange = useCallback((e) => {
    const currentValue = e.target.value;
    setValue(currentValue);
  }, []);

  return (
    <div>
      <div>
        Filter:
        <input
          type="text"
          onChange={onFilterChange}
          value={value}
          placeholder="Enter username"
        />
      </div>
      <Users>
        {data.map((user) => (
          <Row key={user.id} data-testid="test">
            <UserInfo>
              <span>{`Name: ${user.name}`}</span>
              <span>{`Username: ${user.username}`}</span>
            </UserInfo>
            <div>
              <div>
                <span>{user.address.street}</span>
                <span>{user.address.suite}</span>
                <span>{user.address.city}</span>
                <span>{user.address.zipcode}</span>
              </div>
              <div>
                <span>{user.email}</span>
                <span>{user.phone}</span>
              </div>
            </div>
          </Row>
        ))}
      </Users>
    </div>
  );
};

export default UserList;
