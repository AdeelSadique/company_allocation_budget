import { useState } from 'react';
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Select,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  IconButton,
  InputGroup,
  InputLeftAddon,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { TiDelete } from 'react-icons/ti';

function App() {
  const [currency, setCurrency] = useState('$');
  const [budget, setBudget] = useState(0);
  const [increaseByTen, setIncreaseByTen] = useState(0);
  const [decreaseByTen, setDecreaseByTen] = useState(0);
  const [marketing, setMarketing] = useState(0);
  const [finance, setFinance] = useState(0);
  const [sales, setSales] = useState(0);
  const [hr, setHr] = useState(0);
  const [it, setIt] = useState(0);
  const [currentDepartment, setCurrentDepartment] = useState('');
  const [action, setAction] = useState('');
  const [allocateBudget, setAllocateBudget] = useState(0);
  const totalSpent = marketing + sales + finance + hr + it;
  const remainingBudget = budget - totalSpent;

  const plusHandler = (department) => {
    switch (department) {
      case 'f':
        if (finance > remainingBudget || budget == 0) {
          alert(`The value cannot exceed remaining budget is ${remainingBudget}`);
          return;
        } else {
          setFinance((finance) => finance + 10);
        }
        break;
      case 'm':
        if (marketing > remainingBudget || budget == 0) {
          alert(`The value cannot exceed remaining budget is ${remainingBudget}`);
          return;
        } else {
          setMarketing((marketing) => marketing + 10);
        }
        break;
      case 's':
        if (sales > remainingBudget || budget == 0) {
          alert(`The value cannot exceed remaining budget is ${remainingBudget}`);
          return;
        } else {
          setSales((sales) => sales + 10);
        }
        break;
      case 'hr':
        if (hr > remainingBudget || budget == 0) {
          alert(`The value cannot exceed remaining budget is ${remainingBudget}`);
          return;
        } else {
          setHr((hr) => hr + 10);
        }
        break;
      case 'it':
        if (it > remainingBudget || budget == 0) {
          alert(`The value cannot exceed remaining budget is ${remainingBudget}`);
          return;
        } else {
          setIt((it) => it + 10);
        }
        break;

      default:
        break;
    }
  };

  const allocationChangeHandler = (e) => {
    switch (currentDepartment) {
      case 'f':
        if (action === 'deduct') {
          if (allocateBudget <= 0) {
            alert('value must be greater than 0');
            return;
          } else if (allocateBudget > finance) {
            alert('value must be greater than finance budget');
            return;
          } else if (allocateBudget > totalSpent) {
            alert('value must be less than total spent');
            return;
          } else {
            setFinance((finance) => finance - Number(allocateBudget));
          }
        } else if (action === 'add') {
          if (Number(allocateBudget) > remainingBudget) {
            alert(`The value cannot exceed remaining budget is ${remainingBudget}`);
            return;
          } else {
            setFinance((finance) => finance + Number(allocateBudget));
          }
        } else {
          alert('please choose correct action');
          return;
        }
        break;
      case 'm':
        if (action === 'deduct') {
          if (allocateBudget <= 0) {
            alert('value must be greater than 0');
            return;
          } else if (allocateBudget > totalSpent) {
            alert('value must be less than total spent');
            return;
          } else if (allocateBudget > marketing) {
            alert('value must be greater than marketing budget');
            return;
          } else {
            setMarketing((marketing) => marketing - Number(allocateBudget));
          }
        } else if (action === 'add') {
          if (Number(allocateBudget) > remainingBudget) {
            alert(`The value cannot exceed remaining budget is ${remainingBudget}`);
            return;
          } else {
            setMarketing((marketing) => marketing + Number(allocateBudget));
          }
        } else {
          alert('please choose correct action');
          return;
        }
        break;
      case 's':
        if (action === 'deduct') {
          if (allocateBudget <= 0) {
            alert('value must be greater than 0');
            return;
          } else if (allocateBudget > totalSpent) {
            alert('value must be less than total spent');
            return;
          } else if (allocateBudget > sales) {
            alert('value must be greater than sales budget');
            return;
          } else {
            setSales((sales) => sales - Number(allocateBudget));
          }
        } else if (action === 'add') {
          if (Number(allocateBudget) > remainingBudget) {
            alert(`The value cannot exceed remaining budget is ${remainingBudget}`);
            return;
          } else {
            setSales((sales) => sales + Number(allocateBudget));
          }
        } else {
          alert('please choose correct action');
          return;
        }
        break;
      case 'hr':
        if (action === 'deduct') {
          if (allocateBudget <= 0) {
            alert('value must be greater than 0');
            return;
          } else if (allocateBudget > totalSpent) {
            alert('value must be less than total spent');
            return;
          } else if (allocateBudget > hr) {
            alert('value must be greater than hr budget');
            return;
          } else {
            setHr((hr) => hr - Number(allocateBudget));
          }
        } else if (action === 'add') {
          if (Number(allocateBudget) > remainingBudget) {
            alert(`The value cannot exceed remaining budget is ${remainingBudget}`);
            return;
          } else {
            setHr((hr) => hr + Number(allocateBudget));
          }
        } else {
          alert('please choose correct action');
          return;
        }
        break;
      case 'it':
        if (action === 'deduct') {
          if (allocateBudget <= 0) {
            alert('value must be greater than 0');
            return;
          } else if (allocateBudget > totalSpent) {
            alert('value must be less than total spent');
            return;
          } else if (allocateBudget > it) {
            alert('value must be greater than it budget');
            return;
          } else {
            setIt((it) => it - Number(allocateBudget));
          }
        } else if (action === 'add') {
          if (Number(allocateBudget) > remainingBudget) {
            alert(`The value cannot exceed remaining budget is ${remainingBudget}`);
            return;
          } else {
            setIt((it) => it + Number(allocateBudget));
          }
        } else {
          alert('please choose correct action');
          return;
        }
        break;

      default:
        alert('please choose correct department');
        return;
        break;
    }
  };
  const budgetHandler = (e) => {
    const value = e.target.value;
    if (value > 20000) {
      alert('budget is not greater than 20000');
      return;
    } else {
      setBudget(value);
    }
  };
  return (
    <>
      <Container maxW={'container.xl'} p={0}>
        <Heading p={2} bgColor={'darkgray'}>
          Company's Budget Allocation
        </Heading>
        <HStack w={'100%'} spacing={8} p={2}>
          <FormControl w={'full'}>
            <HStack>
              <FormLabel> Budget</FormLabel>
              <InputGroup>
                <InputLeftAddon children={currency} />
                <NumberInput defaultValue={10} min={10} max={20000} maxW={'40'}>
                  <NumberInputField value={budget} onChange={budgetHandler} />
                  <NumberInputStepper>
                    <NumberIncrementStepper onClick={() => setBudget(budget > 20000 ? (budget) => 200000 : (budget) => Number(budget) + 1)} />
                    <NumberDecrementStepper onClick={() => setBudget(budget <= 10 ? (budget) => 10 : (budget) => Number(budget) - 1)} />
                  </NumberInputStepper>
                </NumberInput>
                {/* <Input type='number' value={budget} onChange={(e) => setBudget(e.target.value < 10 ? (budget) => 10 : e.target.value)} maxW={'40'} /> */}
              </InputGroup>
            </HStack>
          </FormControl>
          <FormControl isReadOnly w={'full'}>
            <HStack>
              <FormLabel> Remaining </FormLabel>
              <InputGroup>
                <InputLeftAddon children={currency} />
                <Input type='number' value={remainingBudget} maxW={'40'} />
              </InputGroup>
            </HStack>
          </FormControl>
          <FormControl isReadOnly w={'full'}>
            <HStack>
              <FormLabel> Spent so far</FormLabel>
              <InputGroup>
                <InputLeftAddon children={currency} />
                <Input type='number' value={totalSpent} maxW={'40'} />
              </InputGroup>
            </HStack>
          </FormControl>
          <FormControl w={'full'}>
            <HStack>
              <FormLabel> Currency</FormLabel>

              <Select onChange={(e) => setCurrency(e.target.value)}>
                <option value='$' selected>
                  ($ Dollar)
                </option>
                <option value='£'>(£ Pound)</option>
                <option value='€'>(€ Euro)</option>
                <option value='₹'>(₹ Rupees)</option>
              </Select>
            </HStack>
          </FormControl>
        </HStack>
        <TableContainer p={4}>
          <Heading size={'md'}>Allocation</Heading>
          <Table variant='simple' size={'sm'}>
            <Thead>
              <Tr>
                <Th>Department</Th>
                <Th>Allocated Budget</Th>
                <Th>Increase by 10</Th>
                <Th>Decrease by 10</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Marketing</Td>
                <Td>
                  {currency} {marketing}
                </Td>
                <Td>
                  <IconButton size={'sm'} variant={'unstyled'} onClick={() => plusHandler('m')}>
                    <AiFillPlusCircle size={'20'} color='green' />
                  </IconButton>
                </Td>
                <Td>
                  <IconButton size={'sm'} variant={'unstyled'} onClick={() => setMarketing(marketing <= 0 ? (marketing) => 0 : (marketing) => marketing - 10)}>
                    <AiFillMinusCircle size={'20'} color='red' />
                  </IconButton>
                </Td>
                <Td>
                  <IconButton size={'sm'} variant={'unstyled'} onClick={() => setMarketing(0)}>
                    <TiDelete size={'26'} />
                  </IconButton>
                </Td>
              </Tr>
              <Tr>
                <Td>Finance</Td>
                <Td>
                  {currency} {finance}
                </Td>
                <Td>
                  <IconButton size={'sm'} variant={'unstyled'} onClick={() => plusHandler('f')}>
                    <AiFillPlusCircle size={'20'} color='green' />
                  </IconButton>
                </Td>
                <Td>
                  <IconButton size={'sm'} variant={'unstyled'} onClick={() => setFinance(finance <= 0 ? (finance) => 0 : (finance) => finance - 10)}>
                    <AiFillMinusCircle size={'20'} color='red' />
                  </IconButton>
                </Td>
                <Td>
                  <IconButton size={'sm'} variant={'unstyled'} onClick={() => setFinance(0)}>
                    <TiDelete size={'26'} />
                  </IconButton>
                </Td>
              </Tr>
              <Tr>
                <Td>Sales</Td>
                <Td>
                  {currency} {sales}
                </Td>
                <Td>
                  <IconButton size={'sm'} variant={'unstyled'} onClick={() => plusHandler('s')}>
                    <AiFillPlusCircle size={'20'} color='green' />
                  </IconButton>
                </Td>
                <Td>
                  <IconButton size={'sm'} variant={'unstyled'} onClick={() => setSales(sales <= 0 ? (sales) => 0 : (sales) => sales - 10)}>
                    <AiFillMinusCircle size={'20'} color='red' />
                  </IconButton>
                </Td>
                <Td>
                  <IconButton size={'sm'} variant={'unstyled'} onClick={() => setSales(0)}>
                    <TiDelete size={'26'} />
                  </IconButton>
                </Td>
              </Tr>
              <Tr>
                <Td>Human Resource</Td>
                <Td>
                  {currency} {hr}
                </Td>
                <Td>
                  <IconButton size={'sm'} variant={'unstyled'} onClick={() => plusHandler('hr')}>
                    <AiFillPlusCircle size={'20'} color='green' />
                  </IconButton>
                </Td>
                <Td>
                  <IconButton size={'sm'} variant={'unstyled'} onClick={() => setHr(hr <= 0 ? (hr) => 0 : (hr) => hr - 10)}>
                    <AiFillMinusCircle size={'20'} color='red' />
                  </IconButton>
                </Td>
                <Td>
                  <IconButton size={'sm'} variant={'unstyled'} onClick={() => setHr(0)}>
                    <TiDelete size={'26'} />
                  </IconButton>
                </Td>
              </Tr>
              <Tr>
                <Td>IT</Td>
                <Td>
                  {currency} {it}
                </Td>
                <Td>
                  <IconButton size={'sm'} variant={'unstyled'} onClick={() => plusHandler('it')}>
                    <AiFillPlusCircle size={'20'} color='green' />
                  </IconButton>
                </Td>
                <Td>
                  <IconButton size={'sm'} variant={'unstyled'} onClick={() => setIt(it <= 0 ? (it) => 0 : (it) => it - 10)}>
                    <AiFillMinusCircle size={'20'} color='red' />
                  </IconButton>
                </Td>
                <Td>
                  <IconButton size={'sm'} variant={'unstyled'} onClick={() => setIt(0)}>
                    <TiDelete size={'26'} />
                  </IconButton>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Heading size={'md'} p={4}>
          Change Allocation
        </Heading>
        <HStack w={'full'} justifyContent={'flex-start'} p={2}>
          <FormControl maxW={'25%'}>
            <HStack>
              <FormLabel> Department </FormLabel>

              <Select placeholder={'Select Department'} onChange={(e) => setCurrentDepartment(e.target.value)}>
                <option value='m'>Marketing</option>
                <option value='f'>Finance</option>
                <option value='s'>Sales</option>
                <option value='hr'>HR</option>
                <option value='it'>IT</option>
              </Select>
            </HStack>
          </FormControl>
          <FormControl maxW={'25%'}>
            <HStack>
              <FormLabel mr={0}> Allocation </FormLabel>
              <Select placeholder={'Select Department'} onChange={(e) => setAction(e.target.value)}>
                <option value='add'>Add</option>
                <option value='deduct'>Deduct</option>
              </Select>
            </HStack>
          </FormControl>
          <FormControl maxW={'15%'}>
            <HStack>
              <InputGroup>
                <InputLeftAddon children={currency} />
                <Input type='number' value={allocateBudget} onChange={(e) => setAllocateBudget(e.target.value)} />
              </InputGroup>
            </HStack>
          </FormControl>
          <Button colorScheme={'messenger'} onClick={allocationChangeHandler}>
            Save
          </Button>
        </HStack>
      </Container>
    </>
  );
}

export default App;
