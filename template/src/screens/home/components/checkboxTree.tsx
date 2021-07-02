import React from 'react';
import { StyleSheet, View } from 'react-native';
import CheckboxTree from 'react-native-checkbox-tree';
import { scale } from 'react-native-utils-scale';

export interface Props {
  name: string;
}

const recursiveData = [
  {
    shopReportName: 'Name 1',
    shopCode: '00001',
    shopType: '2',
    shopId: 1,
    shopName: 'Name 1',
    childs: [
      {
        shopReportName: 'Name 2',
        shopCode: '00002',
        shopType: '3',
        shopId: 2,
        shopName: 'Name 2',
        childs: [
          {
            shopReportName: 'Name 3',
            shopCode: '00003',
            shopType: '4',
            shopId: 3,
            shopName: 'Name 3',
            childs: [
              {
                shopReportName: 'Name 4',
                shopCode: '00004',
                shopType: '4',
                shopId: 4,
                shopName: 'Name 4',
              },
              {
                shopReportName: 'Name 5',
                shopCode: '00005',
                shopType: '4',
                shopId: 5,
                shopName: 'Name 5',
                childs: [
                  {
                    shopReportName: 'Name 6',
                    shopCode: '00006',
                    shopType: '4',
                    shopId: 7,
                    shopName: 'Name 6',
                    childs: [
                      {
                        shopReportName: 'Name 7',
                        shopCode: '00007',
                        shopType: '4',
                        shopId: 7,
                        shopName: 'Name 7',
                      },
                    ],
                  },
                ],
              },
              {
                shopReportName: 'Name 8',
                shopCode: '00008',
                shopType: '4',
                shopId: 8,
                shopName: 'Name 8',
              },
            ],
          },
        ],
      },
    ],
  },
];

const CheckboxTreeScreen: React.FC<Props> = _props => {
  return (
    <View style={styles.container}>
      <CheckboxTree
        data={recursiveData}
        textField="shopCode"
        childField="childs"
        textStyle={{ color: 'black' }}
        iconColor="black"
        onSelect={item => {
          console.log(`Selected ${item.length} item`);
        }}
      />
    </View>
  );
};

export default CheckboxTreeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(20),
  },
});
