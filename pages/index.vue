<script lang="ts">
const db = hubDatabase();
const { results } = db.prepare("SELECT * FROM companies LIMIT 2").all();

console.log(results);
</script>

<template>
  <div>
    <div class="invoice mx-auto" style="width: 781.2px; height: 1105.02px">
      <!-- invoice header -->
      <section id="header" class="my-8">
        <div class="flex flex-row">
          <div class="basis-3/4 bg-blue-200">
            <h1 class="text-4xl font-bold text-slate-900">INVOICE</h1>
          </div>
          <div class="basis-1/4 bg-green-200">
            <div class="float-right">Logo</div>
          </div>
        </div>
        <div class="flex flex-row">
          <div class="basis-2/3">
            <div>
              <p>Company name</p>
              <p>
                Company address, <br />
                Location, <br />
                City.
              </p>
            </div>
          </div>
          <div class="basis-1/3">
            <p class="text-right">
              INVOICE #: <span class="ml-16">472984</span>
            </p>
            <p class="text-right">
              INVOICE DATE: <span class="ml-10">12/32/2023</span>
            </p>
            <p class="text-right">PO #: <span class="ml-16">472984</span></p>
            <p class="text-right">
              DUE DATE: <span class="ml-16">472984</span>
            </p>
          </div>
        </div>
        <div class="flex flex-row mt-12">
          <div class="basis-2/3">
            <h2>BILL TO</h2>
            <p>Company name</p>
            <p>
              Compamny adress, <br />
              Location, <br />
              City
            </p>
          </div>
        </div>
      </section>
      <!-- Invoice content -->
      <section id="main-content">
        <table class="table-auto min-w-full">
          <thead class="bg-green-200">
            <tr class="">
              <th class="px-6 py-3 text-start text-left">QTY</th>
              <th class="px-6 py-3 text-start text-left">DESCRIPTION</th>
              <th class="px-6 py-3 text-start text-left">UNIT PRICE</th>
              <th class="px-6 text-right py-3 text-start text-left">AMOUNT</th>
            </tr>
          </thead>
          <tbody class="">
            <tr class="odd:bg-white even:bg-gray-100 hover:bg-gray-100">
              <td class="px-6 py-2 whitespace-nowrap">1</td>
              <td class="px-6 py-2 whitespace-nowrap">
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </td>
              <td class="px-6 py-2 whitespace-nowrap">Malcolm Lockyer</td>
              <td class="px-6 text-right py-2 whitespace-nowrap">1961</td>
            </tr>
            <tr class="odd:bg-white even:bg-gray-100 hover:bg-gray-100">
              <td class="px-6 py-2 whitespace-nowrap">32</td>
              <td class="px-6 py-2 whitespace-nowrap">Witchy Woman</td>
              <td class="px-6 py-2 whitespace-nowrap">The Eagles</td>
              <td class="px-6 text-right py-2 whitespace-nowrap">1972</td>
            </tr>
            <tr class="odd:bg-white even:bg-gray-100 hover:bg-gray-100">
              <td class="px-6 py-2 whitespace-nowrap">7</td>
              <td class="px-6 py-2 whitespace-nowrap">Shining Star</td>
              <td class="px-6 py-2 whitespace-nowrap">Earth, Wind, and Fire</td>
              <td class="px-6 text-right py-2 whitespace-nowrap">1975</td>
            </tr>
            <tr class="odd:bg-white even:bg-gray-100 hover:bg-gray-100">
              <td class="px-6 py-1 whitespace-nowrap"></td>
              <td class="px-6 py-1 whitespace-nowrap"></td>
              <td class="px-6 py-1 whitespace-nowrap font-bold">Sub total</td>
              <td class="px-6 text-right py-1 whitespace-nowrap font-bold">
                1,435,565
              </td>
            </tr>
            <tr>
              <td class="px-6 py-1 whitespace-nowrap"></td>
              <td class="px-6 py-1 whitespace-nowrap"></td>
              <td
                class="px-6 py-1 whitespace-nowrap font-bold text-neutral-400"
              >
                Tax
              </td>
              <td
                class="px-6 text-right py-1 whitespace-nowrap font-bold text-neutral-400"
              >
                1975
              </td>
            </tr>
            <tr>
              <td class="px-6 py-1 whitespace-nowrap"></td>
              <td class="px-6 py-1 whitespace-nowrap"></td>
              <td class="px-6 py-1 whitespace-nowrap font-bold text-green-700">
                Total
              </td>
              <td
                class="px-6 text-right py-1 whitespace-nowrap font-bold text-green-700"
              >
                2,546,677
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <!-- Invoice footer -->
      <section id="footer" class="my-12">
        <h3 class="font-bold text-gray-400">TERMS & CONDITIONS</h3>
        <p>All invoices must be paid within 15 working days.</p>
        <div class="mt-8">
          <p>Bank Name: <span>CRDB Bank</span></p>
          <p>Account Name: <span>Mlipa Kodi Ent</span></p>
          <p>Account Number: <span>234 565 768 8</span></p>
          <p>Bank Branch: <span>Mlimani bay</span></p>
        </div>
      </section>
    </div>
  </div>
</template>
