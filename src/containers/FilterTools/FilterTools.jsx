import React, { useEffect, useState } from 'react';

import { Flex, Form, Select } from 'antd';
import Image from 'next/image';

import ButtonComponent from '@/components/Button';
import Tag from '@/components/Tag';
import { dataTuitionOptions } from '@/containers/FilterTools/Tuition.data';
import { useAPI } from '@/contexts/APIContext';
import {
  getCityByCountry,
  getLevelCourse,
  getRanking,
} from '@/services/common';
import { changeArrayToOptions, rootUrl } from '@/utils/utils';
const FilterTools = ({
  paramsRequest,
  showFooter = false,
  onFilterChange,
  onApply,
  onReset,
  className = '',
}) => {
  const { majors, countries } = useAPI();
  const majorOptions = changeArrayToOptions(majors);
  const [cities, setCities] = useState([]);
  const [levelCourse, setLevelCourse] = useState([]);
  const [rankings, setRanking] = useState([]);
  const [form] = Form.useForm();
  const getCities = async () => {
    try {
      const response = await getCityByCountry({
        province_id: paramsRequest?.country,
      });
      if (response?.code === 200) {
        const citiesOption = changeArrayToOptions(response?.data?.cities);
        setCities(citiesOption);
      }
    } catch (e) {
      /* empty */
    }
  };

  const getLevel = async () => {
    try {
      const response = await getLevelCourse();
      if (response?.code === 200) {
        const levelOption = changeArrayToOptions(response?.data?.level);
        setLevelCourse(levelOption);
      }
    } catch (e) {
      /* empty */
    }
  };
  const getRank = async () => {
    try {
      const response = await getRanking();
      if (response?.code === 200) {
        const rankingOption = changeArrayToOptions(response?.data?.ranking);
        setRanking(rankingOption);
      }
    } catch (e) {
      /* empty */
    }
  };
  useEffect(() => {
    getCities().then();
    getLevel().then();
    getRank().then();
  }, [paramsRequest?.country, paramsRequest?.level, paramsRequest?.ranking]);

  const handleChangeCountry = (option) => {
    form.setFieldValue('province_id', null);
    onFilterChange({
      ...paramsRequest,
      country: option,
    });
  };

  const handleChangeCities = (option) => {
    onFilterChange({
      ...paramsRequest,
      province: option,
    });
  };
  return (
    <div className={`pb-[7rem] ${className}`}>
      <span
        className={
          'block w-full bg-style-10 rounded-sm p-4 text-white font-[600] text-[1.8rem] mb-[1.2rem]'
        }
      >
        Bộ lọc
      </span>
      <div className={'border border-style-8 border-solid rounded-sm py-4'}>
        <h3 className={'p-[.8rem_1.6rem] text-[2rem] text-style-7 font-[600]'}>
          Ngành Học
        </h3>
        <div>
          <Tag
            value={majorOptions.find(
              (option) => option.value === paramsRequest?.majors
            )}
            options={majorOptions}
            onChange={(option) => {
              const selectedTabValue = option?.value;
              onFilterChange({
                majors: selectedTabValue,
              });
            }}
            filterTool
            className={'flex-col items-start justify-start pl-[.5rem]'}
          />
        </div>
      </div>
      <div className={'border border-style-8 border-solid rounded-sm mt-5 p-4'}>
        <h3 className={'p-[.8rem] text-[2rem] text-style-7 font-[600]'}>
          Quốc gia, thành phố
        </h3>
        <div>
          <Form form={form}>
            <Select
              allowClear
              showSearch
              placeholder="Nhập Quốc Gia..."
              className={'w-full mb-5'}
              onChange={(option) => handleChangeCountry(option)}
            >
              {countries &&
                countries.map((item) => (
                  <Select.Option
                    key={item?.value}
                    value={item?.value}
                    label={item?.label}
                  >
                    <Flex align={'center'} gap={'small'}>
                      <Image
                        quality={100}
                        src={`${rootUrl}/${item?.icon}`}
                        alt={''}
                        width={24}
                        height={24}
                      />
                      {item?.label}
                    </Flex>
                  </Select.Option>
                ))}
            </Select>
            <Form.Item name={'province_id'}>
              <Select
                allowClear
                showSearch
                placeholder="Nhập thành phố"
                className={'w-full mb-4'}
                onChange={(option) => handleChangeCities(option)}
              >
                {cities &&
                  cities.map((item) => (
                    <Select.Option
                      key={item?.value}
                      value={item?.value}
                      label={item?.label}
                    >
                      {item?.label}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div
        className={'border border-style-8 border-solid rounded-sm mt-5 py-4'}
      >
        <h3 className={'p-[.8rem_1.6rem] text-[2rem] text-style-7 font-[600]'}>
          Học phí
        </h3>
        <div>
          <Tag
            value={dataTuitionOptions.find(
              (option) => option.value === paramsRequest?.survey_tuition
            )}
            options={dataTuitionOptions}
            onChange={(option) => {
              const selectedTabValue = option?.value;
              onFilterChange({
                ...paramsRequest,
                survey_tuition: selectedTabValue,
              });
            }}
            filterTool
            className={'flex-col items-start justify-start pl-[.5rem]'}
          />
        </div>
      </div>
      <div
        className={'border border-style-8 border-solid rounded-sm mt-5 py-4'}
      >
        <h3 className={'p-[.8rem_1.6rem] text-[2rem] text-style-7 font-[600]'}>
          Bậc học
        </h3>
        <div>
          <Tag
            value={levelCourse.find(
              (option) => option.value === paramsRequest?.level
            )}
            options={levelCourse}
            onChange={(option) => {
              const selectedTabValue = option?.value;
              onFilterChange({
                ...paramsRequest,
                level: selectedTabValue,
              });
            }}
            filterTool
            className={'flex-col items-start justify-start pl-[.5rem]'}
          />
        </div>
      </div>
      <div
        className={'border border-style-8 border-solid rounded-sm mt-5 py-4'}
      >
        <h3 className={'p-[.8rem_1.6rem] text-[2rem] text-style-7 font-[600]'}>
          Xếp hạng
        </h3>
        <div>
          <Tag
            value={
              rankings &&
              rankings.find((option) => option.value === paramsRequest?.ranking)
            }
            options={rankings}
            onChange={(option) => {
              const selectedTabValue = option?.value;
              onFilterChange({
                ...paramsRequest,
                ranking: selectedTabValue,
              });
            }}
            filterTool
            className={'flex-col items-start justify-start pl-[.5rem]'}
          />
        </div>
      </div>
      {showFooter ? (
        <Flex
          align={'center'}
          justify={'space-between'}
          className={
            'absolute w-full left-0 bottom-0 shadow-md bg-white p-[1.2rem_1.6rem]'
          }
        >
          <ButtonComponent
            title={'Áp dụng'}
            className={'primary w-[15rem]'}
            loading={false}
            onClick={onApply}
          />
          <ButtonComponent
            title={'Đặt lại'}
            className={'primary-outline w-[15rem]'}
            loading={false}
            onClick={onReset}
          />
        </Flex>
      ) : (
        <ButtonComponent
          title={'Đặt lại'}
          className={'primary w-full mt-5'}
          loading={false}
          onClick={() => {
            onReset?.({
              page: 1,
              limit: 10,
            });
          }}
        />
      )}
    </div>
  );
};
export default FilterTools;
